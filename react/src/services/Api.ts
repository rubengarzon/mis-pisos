import { House } from "../types";

const API_URL = "http://127.0.0.1:3001/api/";

/**
 * Obtiene todas las viviendas de la base de datos
 * @param ciudad - Ciudad de la que se quieren obtener las viviendas
 * @returns - Array de viviendas de la ciudad indicada
 */
export const getHousesByCity = (busqueda: string): Promise<House> => {
  return fetch(`${API_URL}anuncios/${busqueda}`)
    .then((response) => response.json())
    .catch(() => {
      console.log("Error al obtener las viviendas");
    });
};
/**
 *  Obtiene todas las viviendas de la base de datos
 * @param tipoInmueble - Tipo de inmueble de la que se quieren obtener las viviendas
 * @returns - Array de viviendas del tipo de inmueble indicado
 */
export const getHouseByPropertyType = (
  tipoInmueble: string
): Promise<House> => {
  return fetch(`${API_URL}viviendas/tipoInmueble/${tipoInmueble}`)
    .then((response) => response.json())
    .catch(() => {
      console.log("Error al obtener las viviendas");
    });
};
/**
 * Obtiene todas las viviendas de la base de datos que coincidan con el precio indicado
 * @param precio - Precio de la que se quieren obtener las viviendas
 * @returns - Array de viviendas del precio indicado
 */
export const getHouseByPrice = (precio: string): Promise<House> => {
  return fetch(`${API_URL}viviendas/precio/${precio}`)
    .then((response) => response.json())
    .catch(() => {
      console.log("Error al obtener las viviendas");
    });
};
/**
 * Obtiene las viviendas de la base de datos que coincidan con los filtros indicados
 * @param ciudad - Ciudad de la que se quieren obtener las viviendas
 * @param tipoVivienda - Tipo de vivienda de la que se quieren obtener las viviendas
 * @param precio - Precio de la que se quieren obtener las viviendas
 * @param habitaciones - Habitaciones de la que se quieren obtener las viviendas
 * @returns - Array de viviendas que coincidan con los filtros indicados
 */
export const getHouseByFilter = (
  ciudad: string,
  tipoVivienda: string,
  precio: string,
  habitaciones: string
): Promise<House> => {
  let query = "";

  if (tipoVivienda.length > 0) {
    query += `&tipo=${tipoVivienda}`;
  }

  if (precio.length > 0) {
    query += `&precio=${precio}`;
  }

  if (habitaciones.length > 0) {
    query += `&habitaciones=${habitaciones}`;
  }

  return fetch(`${API_URL}viviendas/filtros?ciudad=${ciudad}${query}`)
    .then((response) => response.json())
    .catch(() => {
      console.log("Error al obtener las viviendas");
    });
};
export const getHouseByRooms = (habitaciones: string): Promise<House> => {
  return fetch(`${API_URL}viviendas/habitaciones/${habitaciones}`)
    .then((response) => response.json())
    .catch(() => {
      console.log("Error al obtener las viviendas");
    });
};
/**
 * Login de usuario
 * @param username - Nombre de usuario
 * @param password - Contraseña
 * @returns - Usuario
 */
export const login = (username: string, password: string): Promise<any> => {
  return fetch(`${API_URL}login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .catch(() => {
      console.log("Error al iniciar sesión");
    });
};
/**
 * Registro de usuario
 * @param username - Nombre de usuario
 * @param name - Nombre
 * @param password - Contraseña
 * @returns - Usuario
 */
export const register = (
  username: string,
  name: string,
  password: string
): Promise<any> => {
  return fetch(`${API_URL}register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, name, password }),
  })
    .then((response) => response.json())
    .catch(() => {
      console.log("Error al registrar usuario");
    });
};
