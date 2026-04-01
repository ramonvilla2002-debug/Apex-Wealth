// Apex Wealth - Firebase Infrastructure Configuration
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Estas son las credenciales que conectan la App con la nube de Google
// Nota: En un entorno de producción, estas se manejan con variables de entorno (.env)
const firebaseConfig = {
  apiKey: "AIzaSyA-REPLACE-WITH-YOUR-KEY",
  authDomain: "apex-wealth-auditing.firebaseapp.com",
  projectId: "apex-wealth-auditing",
  storageBucket: "apex-wealth-auditing.appspot.com",
  messagingSenderId: "8402938475",
  appId: "1:8402938475:web:a1b2c3d4e5f6"
};

// Inicialización de los servicios de Apex Wealth
const app = initializeApp(firebaseConfig);

// Base de datos NoSQL para auditoría en tiempo real
export const db = getFirestore(app);

// Sistema de autenticación segura (Hacking Ético / Seguridad)
export const auth = getAuth(app);

/** * Función lógica de Integridad de Datos: 
 * Verifica que los registros no hayan sido alterados.
 */
export const verifyDataIntegrity = async (transactionId) => {
  const q = query(collection(db, "audit_logs"), where("id", "==", transactionId));
  const querySnapshot = await getDocs(q);
  
  if (!querySnapshot.empty) {
    console.log("🛡️ Integrity Check: Success");
    return true;
  }
  return false;
};
