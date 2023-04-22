package com.parkvro.backend.security;

import com.parkvro.backend.security.service.JpaBpDetailsService;
import com.parkvro.backend.security.service.JpaCustomerDetailsService;
import lombok.AllArgsConstructor;
import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;


@Configuration
@EnableWebSecurity
@AllArgsConstructor
public class SecurityConfig {
    private final JpaCustomerDetailsService customerDetailsService;
    private final JpaBpDetailsService bpDetailsService;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.addAllowedOrigin("http://localhost:3001");
        config.addAllowedOrigin("http://localhost:3000");
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");
        source.registerCorsConfiguration("/**", config);

        return http
                .headers().frameOptions().disable()
                .and().csrf().disable()
                .cors().configurationSource(source) // Enable CORS
                .and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and().authorizeHttpRequests(auth -> auth
                        .requestMatchers(PathRequest.toH2Console()).permitAll()
                        .requestMatchers(SecurityConstants.REGISTER_PATH).permitAll()
                        .requestMatchers(SecurityConstants.API_DOCS).permitAll()
                        .anyRequest().authenticated()
                )
                .userDetailsService(bpDetailsService)
                .userDetailsService(customerDetailsService)
                .httpBasic(Customizer.withDefaults())
                .build();
    }




}
