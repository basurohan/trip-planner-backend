import trips from '../db'

const getTripSummary = () => {
    let tripSummaries = [];

    trips.forEach(trip =>  tripSummaries.push({
        id: trip.id,
        order: trip.order,
        country: trip.country,
        city: trip.city,
        budget: trip.spendingBudget,
        noOfTraveller: trip.noOfTravellers,
        startDate: trip.startDate,
        endDate: trip.endDate
    }))

    return tripSummaries;
}

export default getTripSummary