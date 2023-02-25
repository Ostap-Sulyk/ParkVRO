package com.parkvro.backend.service;

import com.parkvro.backend.entities.Booking;
import com.parkvro.backend.entities.Customer;
import com.parkvro.backend.entities.ParkingSpot;
import com.parkvro.backend.repository.BookingRepository;
import com.parkvro.backend.repository.CustomerRepository;
import com.parkvro.backend.repository.ParkingSpotRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@AllArgsConstructor
public class BookingServiceImpl implements BookingService {
    private  BookingRepository bookingRepository;
    private  CustomerRepository customerRepository;
    private  ParkingSpotRepository parkingSpotRepository;

    @Override
    public void deleteBooking(Long id) {
        bookingRepository.deleteById(id);
    }

    @Override
    public Booking getBooking(Long id) {
        return bookingRepository.findById(id).get();
    }

    @Override
    public Booking createBooking(Booking booking, Long customerId, Long parkingSpotId) {
        Customer customer = customerRepository.findById(customerId).get();
        ParkingSpot parkingSpot = parkingSpotRepository.findById(parkingSpotId).get();
        if(parkingSpot.getAvailable()){
            parkingSpot.setAvailable(false);
            booking.setCustomer(customer);
            booking.setParkingSpot(parkingSpot);
            return bookingRepository.save(booking);
        }else {
            throw new RuntimeException("Parking spot is not available");
        }

    }

    @Override
    public List<Booking> getBookingsByCustomer(Long customerId) {
        return bookingRepository.getAllByCustomerId(customerId);
    }

    @Override
    public List<Booking> getBookingsByParkingSpot(Long parkingSpotId) {
        return getBookingsByParkingSpot(parkingSpotId);
    }

    @Override
    public List<Booking> getAllBookings() {
        return (List<Booking>) bookingRepository.findAll();
    }
}
