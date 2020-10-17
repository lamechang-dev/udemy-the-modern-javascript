let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    seatParty: function (partySize) {
        this.guestCount += partySize;
    },
    removeParty: function (partySize) {
        this.guestCount -= partySize;
    },
    checkAvailability: function (partySize) {
        seatsLeft = this.guestCapacity - this.guestCount
        if (seatsLeft - partySize >= 0) {
            return 'there is vacant seat';
        } else {
            return 'no seats available';
        }
    }
}

restaurant.seatParty(72);
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(5);
console.log(restaurant.checkAvailability(4));
