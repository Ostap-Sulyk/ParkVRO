package com.parkvro.backend.security.service;

import com.parkvro.backend.entities.BusinessPartner;
import lombok.AllArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Arrays;
import java.util.Collection;

@AllArgsConstructor
public class SecurityBP implements UserDetails {

    private final BusinessPartner businessPartner;

    @Override
    public String getUsername() {
        return businessPartner.getEmail();
    }

    @Override
    public String getPassword() {
        return businessPartner.getPassword();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Arrays.stream(
                new String[]{
                        businessPartner.getClass().getSimpleName().toLowerCase()
                }
        ).map(SimpleGrantedAuthority::new).toList();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}