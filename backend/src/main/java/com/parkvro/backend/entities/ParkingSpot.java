package com.parkvro.backend.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import lombok.*;

import java.math.BigDecimal;
import java.util.List;

@Getter
@Setter
@RequiredArgsConstructor
@Entity
@Table
public class ParkingSpot {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @NonNull
    @NotBlank
    @Column(nullable = false)
    private String address;

    @NonNull
    @Column(nullable = false)
    private double lat;

    @NonNull
    @Column(nullable = false)
    private double lng;

    @NonNull
    @Column(nullable = false)
    private Boolean available;

    @NonNull
    @Column(nullable = false)
    @Positive
    private BigDecimal price;

    @Lob
    private byte[] image;

    @NonNull
    @JsonIgnore
    @ManyToOne(optional = false)
    @JoinColumn(referencedColumnName = "id")
    private BusinessPartner businessPartner;

    public ParkingSpot(){
        this.available = true;
    }

}
