import Explore from './explorer.js'

export default class Viajero extends Explore {
    constructor(name, username, missions, cycle) {
        super(name, username, mission, )
        this.cycle = cycle
    }

    getGeneralInfo() {
        let nameAnUsername = this.getNameAndUsername()
        return '${nameAndUsername}, Ciclo ${this.cycle}'
    }
}