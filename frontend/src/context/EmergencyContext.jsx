import { createContext, useContext, useState, useEffect } from "react";
import {
  getEmergencies,
  createEmergency,
  updateEmergency as updateEmergencyAPI,
  deleteEmergency as deleteEmergencyAPI,
  assignDoctor as assignDoctorAPI,
  allocateICU as allocateICUAPI,
  dispatchAmbulance as dispatchAmbulanceAPI,
} from "../services/emergencyService";
import {
  getDoctors,
  createDoctor,
  deleteDoctor as deleteDoctorAPI,
  updateDoctor,
} from "../services/doctorService";
import {
  getICUBeds,
  createICUBed,
  deleteICUBed as deleteICUBedAPI,
} from "../services/icuBedService";
import { toast } from "react-toastify";
import {
  getAmbulances,
  createAmbulance,
  deleteAmbulance as deleteAmbulanceAPI,
  updateAmbulance,
  changeAmbulanceStatus as changeAmbulanceStatusAPI,
} from "../services/ambulanceService";
import {
  getEquipments,
  createEquipment,
  deleteEquipment as deleteEquipmentAPI,
  changeEquipmentStatus as changeEquipmentStatusAPI,
} from "../services/equipmentService";
import {
  getBloodBank,
  createBlood,
  deleteBlood as deleteBloodAPI,
  addBloodUnit as addBloodUnitAPI,
  issueBloodUnit as issueBloodUnitAPI,
} from "../services/bloodBankService";
import {
  getNurses,
  createNurse,
  deleteNurse as deleteNurseAPI,
  toggleNurseAvailability,
} from "../services/nurseService";

const EmergencyContext = createContext();

export function EmergencyProvider({ children }) {
  // ============================
  // Emergency State
  // ============================

  const [emergencies, setEmergencies] = useState([]);

  // ============================
  // Alerts
  // ============================

  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: "info",
      message: "Emergency Management System Started",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);

  // ============================
  // Dashboard Counters
  // ============================


  // ============================
  // Doctors
  // ============================

  const [doctors,setDoctors]=useState([]);
  const loadDoctors = async () => {
  try {
    const response = await getDoctors();
    setDoctors(response.data);
  } catch (err) {
    console.error(err);
  }
};

const [nurses, setNurses] = useState([]);

const loadNurses = async () => {
  try {
    const response = await getNurses();
    setNurses(response.data);
  } catch (err) {
    console.error("Error loading nurses:", err);
  }
};
  const [ambulances, setAmbulances] = useState([]);

const loadAmbulances = async () => {
  try {
    const response = await getAmbulances();
    setAmbulances(response.data);
  } catch (err) {
    console.error(err);
  }
};

const loadEquipments = async () => {
  try {
    const response = await getEquipments();
    setEquipments(response.data);
  } catch (err) {
    console.error(err);
  }
};
const loadBloodBank = async () => {
  try {
    const response = await getBloodBank();
    setBloodBank(response.data);
  } catch (err) {
    console.error(err);
  }
};

const [equipments, setEquipments] = useState([]);

const [bloodBank, setBloodBank] = useState([]);

  // ============================
  // ICU Beds
  // ============================

  const [icuBeds, setICUBeds] = useState([]);
  const loadICUBeds = async () => {
  try {
    const response = await getICUBeds();
    setICUBeds(response.data);
  } catch (err) {
    console.error(err);
  }
};

const addICUBed = async (bed) => {
  try {
    await createICUBed(bed);

    toast.success("ICU Bed Added");

    loadICUBeds();
  } catch (err) {
    console.error(err);
  }
};

const allocateBed = async (id) => {
  setICUBeds((prev) =>
    prev.map((bed) =>
      bed.id === id
        ? { ...bed, available: false }
        : bed
    )
  );
};

  // ============================
  // Load Emergencies from Backend
  // ============================

 useEffect(() => {
  loadEmergencies();
  loadDoctors();
  loadICUBeds();
  loadAmbulances();
  loadEquipments();
  loadNurses();
  loadBloodBank();
}, []);

  const loadEmergencies = async () => {
    try {
      const response = await getEmergencies();
      setEmergencies(response.data);
    } catch (error) {
      console.error("Error loading emergencies:", error);
    }
  };

  // ============================
  // Alerts Function
  // ============================

  const addAlert = (type, message) => {
    setAlerts((prev) => [
      {
        id: Date.now(),
        type,
        message,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
      ...prev,
    ]);
  };

  // ============================
  // Add Emergency (Backend)
  // ============================

  const addEmergency = async (emergency) => {
    try {
      const response = await createEmergency(emergency);
      toast.success("Emergency Registered Successfully");
setEmergencies((prev) => [...prev, response.data]);

      addAlert(
        "critical",
        `New ${emergency.priority} emergency: ${emergency.patientName}`
      );

      loadEmergencies();
    } catch (error) {
      console.error("Error creating emergency:", error);
    }
  };
  const deleteEmergency = async (id) => {

  try {

    await deleteEmergencyAPI(id);
    toast.error("Emergency Deleted Successfully");

    loadEmergencies();

    addAlert(
      "warning",
      "Emergency record deleted"
    );

  } catch (err) {

    console.error(err);

  }

};
const updateEmergency = async (id, data) => {

  try {

    await updateEmergencyAPI(id, data);
    toast.info("Emergency Updated Successfully");

    loadEmergencies();

    addAlert(
      "info",
      `Emergency updated for ${data.patientName}`
    );

  } catch (err) {

    console.error(err);

  }

};
  const assignDoctor = async (id) => {
  //await assignDoctorAPI(id);

  loadEmergencies();

  addAlert("doctor", "Doctor Assigned");
};

const allocateICU = async (id) => {
  //await allocateICUAPI(id);

  loadEmergencies();

  addAlert("icu", "ICU Allocated");
};

const dispatchAmbulance = async (id) => {
  //await dispatchAmbulanceAPI(id);

  loadEmergencies();

  addAlert("ambulance", "Ambulance Dispatched");
};

const releaseBed = (id) => {
  setICUBeds((prev) =>
    prev.map((bed) =>
      bed.id === id
        ? { ...bed, available: true }
        : bed
    )
  );
};
const deleteICUBed = async (id) => {
  try {
    await deleteICUBedAPI(id);

    toast.success("ICU Bed Deleted");

    loadICUBeds();
  } catch (err) {
    console.error(err);
  }
};
const addAmbulance = async (ambulance) => {
  try {
    await createAmbulance({
      ...ambulance,
      status: "Available",
    });

    toast.success("Ambulance Added");

    loadAmbulances();

    addAlert(
      "ambulance",
      `${ambulance.vehicleNo} added`
    );
  } catch (err) {
    console.error(err);
  }
};

const deleteAmbulance = async (id) => {
  try {
    await deleteAmbulanceAPI(id);

    toast.success("Ambulance Deleted");

    loadAmbulances();
  } catch (err) {
    console.error(err);
  }
};

const changeAmbulanceStatus = async (id) => {
  try {

    await changeAmbulanceStatusAPI(id);

    toast.success("Status Updated");

    loadAmbulances();

    addAlert(
      "ambulance",
      "Ambulance status changed"
    );

  } catch (err) {

    console.error(err);

  }
};

const addDoctor = async (doctor) => {
  await createDoctor(doctor);
  loadDoctors();
};

const deleteDoctor = async (id) => {
  try {
    await deleteDoctorAPI(id);

    toast.success("Doctor Deleted");

    loadDoctors();

    addAlert(
      "doctor",
      "Doctor removed successfully"
    );
  } catch (err) {
    console.error(err);
  }
};
const toggleAvailability = (id) => {
  setDoctors((prev) =>
    prev.map((doctor) =>
      doctor.id === id
        ? {
            ...doctor,
            available: !doctor.available,
          }
        : doctor
    )
  );
};

const addNurse = async (nurse) => {
  try {
    await createNurse({
      ...nurse,
      available: true,
    });

    toast.success("Nurse Added");

    loadNurses();

    addAlert(
      "nurse",
      `${nurse.name} added successfully`
    );
  } catch (err) {
    console.error(err);
  }
};

const deleteNurse = async (id) => {
  try {
    await deleteNurseAPI(id);

    toast.success("Nurse Deleted");

    loadNurses();
  } catch (err) {
    console.error(err);
  }
};

const toggleNurseAvailabilityStatus = async (id) => {
  try {
    await toggleNurseAvailability(id);

    toast.success("Nurse Availability Updated");

    loadNurses();
  } catch (err) {
    console.error(err);
  }
};
// ============================
// EQUIPMENT FUNCTIONS
// ============================



const addEquipment = async (equipment) => {
  await createEquipment(equipment);

  loadEquipments();

  toast.success("Equipment Added");
};

const deleteEquipment = async (id) => {

  await deleteEquipmentAPI(id);

  loadEquipments();

  toast.success("Equipment Deleted");
};

const changeEquipmentStatus = async (id) => {
  try {
    await changeEquipmentStatusAPI(id);

    toast.success("Status Updated");

    loadEquipments();
  } catch (err) {
    console.error(err);
  }
};

// ============================
// BLOOD BANK FUNCTIONS
// ============================

const addBloodUnit = async (id) => {
  try {
    await addBloodUnitAPI(id);

    toast.success("Blood Unit Added");

    loadBloodBank();

    addAlert(
      "blood",
      "Blood unit added successfully"
    );

  } catch (err) {
    console.error(err);
  }
};

const issueBloodUnit = async (id) => {
  try {
    await issueBloodUnitAPI(id);

    toast.success("Blood Unit Issued");

    loadBloodBank();

    addAlert(
      "blood",
      "Blood unit issued successfully"
    );

  } catch (err) {
    console.error(err);
  }
};

const addBlood = async (blood) => {
  try {
    await createBlood(blood);

    toast.success("Blood Group Added");

    loadBloodBank();

  } catch (err) {
    console.error(err);
  }
};
const deleteBlood = async (id) => {
  try {
    await deleteBlood(id);

    toast.success("Blood Group Deleted");

    loadBloodBank();

  } catch (err) {
    console.error(err);
  }
};
// ============================
// PROVIDER
// ============================

return (
  <EmergencyContext.Provider
    value={{
      emergencies,
      alerts,


      // Doctors
      doctors,
      addDoctor,
      deleteDoctor,
      toggleAvailability,
      

      // ICU
      // ICU
      icuBeds,
addICUBed,
deleteICUBed,
allocateBed,
releaseBed,

      // Ambulance
      ambulances,
      addAmbulance,
      deleteAmbulance,
      changeAmbulanceStatus,

      // Emergency
      addEmergency,
      assignDoctor,
      allocateICU,
      dispatchAmbulance,
      deleteEmergency,
      updateEmergency,

      // Alerts
      addAlert,

      // Equipment
      equipments,
addEquipment,
deleteEquipment,
changeEquipmentStatus,

      // Blood Bank
      bloodBank,
addBlood,
deleteBlood,
addBloodUnit,
issueBloodUnit,

// Nurses
nurses,
addNurse,
deleteNurse,
toggleNurseAvailabilityStatus,
    }}
  >
    {children}
  </EmergencyContext.Provider>
);

}

// ============================
// CUSTOM HOOK
// ============================

export function useEmergency() {
  return useContext(EmergencyContext);
}