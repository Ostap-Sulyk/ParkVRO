package com.parkvro.backend.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@RequiredArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "customer")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    @NotBlank
    @NonNull
    @Column(nullable = false)
    private String firstName;
    @NonNull
    @NotBlank
    @Column(nullable = false)
    private String lastName;


    @NonNull
    @NotBlank
    @Email
    @Column(nullable = false, unique = true)
    private String email;

    @NonNull
    @NotBlank
    @Column(nullable = false)
    private String password;

}

