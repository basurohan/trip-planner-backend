import trips from '../db'

const getTripDetailsById = (tripId) => {
    return trips.find(trip => trip.id === tripId)
}

export default getTripDetailsById