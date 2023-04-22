package com.parkvro.backend.entities;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.sql.Date;
import java.time.LocalDate;


@Getter
@Setter
@Entity
@Table
@RequiredArgsConstructor
@AllArgsConstructor
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    public Long id;

    @NonNull
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    public Date dateCreated;

    @NonNull
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    public Date bookingDate;


    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(referencedColumnName = "id")
    public Customer customer;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(referencedColumnName = "id")
    public ParkingSpot parkingSpot;

    public Booking() {
        this.setDateCreated(Date.valueOf(LocalDate.now()));
    }
    public Booking(Date bookingDate, Customer customer, ParkingSpot parkingSpot) {
        this.setDateCreated(Date.valueOf(LocalDate.now()));
        this.setBookingDate(bookingDate);
        this.setCustomer(customer);
        this.setParkingSpot(parkingSpot);
    }

}
