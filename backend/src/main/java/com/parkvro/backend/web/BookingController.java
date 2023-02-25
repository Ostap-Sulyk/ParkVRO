package com.parkvro.backend.web;


import com.parkvro.backend.entities.Booking;
import com.parkvro.backend.service.BookingService;
import com.parkvro.backend.service.ParkingSpotService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/booking")
@CrossOrigin(origins = {"http://localhost:3001", "http://localhost:3000"})
public class BookingController {
    private final BookingService bookingService;
    private final ParkingSpotService parkingSpotService;

    @GetMapping("/all")
    public  ResponseEntity<List<Booking>> getAllBookings(){
        return new ResponseEntity<>(bookingService.getAllBookings(), HttpStatus.OK);
    }

    @PostMapping("/customer/{customerId}/parkingSpot/{parkingSpotId}")
    public ResponseEntity<Booking> makeBooking(@PathVariable Long customerId, @PathVariable Long parkingSpotId) {


        return new ResponseEntity<>(bookingService.createBooking(new Booking(), customerId, parkingSpotId), HttpStatus.CREATED);
    }

    @GetMapping("/parking/{id}")
    public ResponseEntity<List<Booking>> getBookingsByParkingSpot(@PathVariable Long id) {
        return new ResponseEntity<>(bookingService.getBookingsByParkingSpot(id), HttpStatus.OK);
    }

    @GetMapping("/customer/{id}")
    public ResponseEntity<List<Booking>> getBookingsByCustomer(@PathVariable Long id) {
        return new ResponseEntity<>(bookingService.getBookingsByCustomer(id), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteBooking(@PathVariable Long id){
        bookingService.deleteBooking(id);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Booking> getBooking(@PathVariable Long id) {
        return new ResponseEntity<>(bookingService.getBooking(id), HttpStatus.OK);
    }


}
