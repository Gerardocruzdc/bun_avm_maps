import type { Usor } from "../types";

interface UsoresState {
  perId: Map<string, Usor>;
  
}

// {"id1: Usor1, Usor2, ...}"}

export class UsoresStore {

  private state: UsoresState = {
    perId: new Map()
  }

  addere(socketId: string, usor: Usor) {
  this.state.perId.set(socketId, usor);
  }

  actualizarePositione(socketId: string, lat: number, lng: number) {
    const usor = this.state.perId.get(socketId);

    if (!usor) return false;
    
      usor.lat = lat;
      usor.lng = lng;
      
    return true;
    
  }

  delere(socketId: string) {
    this.state.perId.delete(socketId);
  }

  obtinere(socketId: string) {
    return this.state.perId.get(socketId);
  }

  obtinereOmnes(): Usor[] {
    return Array.from(this.state.perId.values());
  }

  obtinereAlios(socketId: string): Usor[] {
    return this.obtinereOmnes().filter((usor) => usor.id !== socketId);
  }

}

