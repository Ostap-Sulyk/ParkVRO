package com.parkvro.backend.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

import java.math.BigDecimal;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor(force = true)
@RequiredArgsConstructor
@Entity
@Table(name = "business_partner")
public class BusinessPartner {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    @NotBlank
    @NonNull
    private String firstName;
    @NonNull
    @NotBlank
    private String lastName;
    @NonNull
    @NotBlank
    @Email
    @Column(nullable = false, unique = true)
    private String email;

    @NonNull
    @NotBlank
    private String address;

    @NonNull
    @NotBlank
    private String phoneNumber;

    @NonNull
    @NotBlank
    private String password;

    @NonNull
    private BigDecimal balance;

    @JsonIgnore
    @OneToMany(mappedBy = "businessPartner", cascade = CascadeType.ALL)
    private List<ParkingSpot> parkingSpots;

}
