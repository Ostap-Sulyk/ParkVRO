package com.parkvro.backend.security.service;

import com.parkvro.backend.repository.BPRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class JpaBpDetailsService implements UserDetailsService {

    private final BPRepository bpRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return bpRepository
                .findByEmail(email)
                .map(SecurityBP::new)
                .orElseThrow(() -> new UsernameNotFoundException("Customer not found: " + email));
    }
}