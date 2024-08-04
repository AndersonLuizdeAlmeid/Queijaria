import { IpcMainInvokeEvent } from "electron";
import clientService from "../services/clientService";
import { Client } from "main/models/Clients/types";

export const getAllClients = async (
  event: IpcMainInvokeEvent
): Promise<any> => {
  try {
    return await clientService.getAll();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createClient = async (
  event: IpcMainInvokeEvent,
  clientData: Client
): Promise<any> => {
  try {
    const novoCliente = await clientService.create(clientData);
    return novoCliente;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateClient = async (
  event: IpcMainInvokeEvent,
  clientData: Client
): Promise<any> => {
  try {
    const updatedClient = await clientService.update(clientData);
    return updatedClient;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteClient = async (
  event: IpcMainInvokeEvent,
  id: number
): Promise<any> => {
  try {
    await clientService.delete(id);
    return { message: "Cliente deletado com sucesso" };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
