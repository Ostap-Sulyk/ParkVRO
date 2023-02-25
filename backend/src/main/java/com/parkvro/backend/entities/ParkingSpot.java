package com.parkvro.backend.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

// TODO: wire booking to parking spot
// TODO: wire booking to customer

@Getter
@Setter
@RequiredArgsConstructor
@Entity
@Table
public class ParkingSpot {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NonNull
    @NotBlank
    @Column(nullable = false)
    private String address;

    @NonNull
    @Column(nullable = false)
    private Boolean available;

    @NonNull
    @JsonIgnore
    @ManyToOne(optional = false)
    @JoinColumn(referencedColumnName = "id")
    private BusinessPartner businessPartner;

    public ParkingSpot(){
        this.available = true;
    }

    public void update(ParkingSpot newParkingSpot) {
        this.available = newParkingSpot.getAvailable();
        this.address = newParkingSpot.getAddress();
    }
}
