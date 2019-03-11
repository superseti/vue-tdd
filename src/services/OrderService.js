export class OrderService {
    get currentOrder() {
        return JSON.parse(window.localStorage.getItem(localId));
    }
    set currentOrder(value) {
        window.localStorage.setItem(localId, JSON.stringify(value));
    }
    clear() {
        this.currentOrder = null;
    }
}

const localId = '_currentOrder';