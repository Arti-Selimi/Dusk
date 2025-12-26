package com.dusk.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import javax.crypto.SecretKey;
import java.util.Date;

@Service
public class JwtService {
  private final String SECRET = System.getenv("JWT_SECRET");

  public String generateToken(String email) {
    return Jwts.builder()
        .subject(email)
        .issuedAt(new Date())
        .expiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60))
        .signWith(getSigningKey())
        .compact();
  }

  public String extractEmail(String token) {
    return Jwts.parser().verifyWith(getSigningKey()).build()
        .parseSignedClaims(token).getPayload().getSubject();
  }

  private SecretKey getSigningKey() {
    if (SECRET == null)
      throw new RuntimeException("JWT_SECRET env var is missing");
    return Keys.hmacShaKeyFor(SECRET.getBytes());
  }

  public boolean isTokenValid(String token, UserDetails userDetails) {
    final String username = extractEmail(token);
    return (username.equals(userDetails.getUsername())) && !isTokenExpired(token);
  }

  private boolean isTokenExpired(String token) {
    return extractExpiration(token).before(new Date());
  }

  private Date extractExpiration(String token) {
    return Jwts.parser().verifyWith(getSigningKey()).build()
        .parseSignedClaims(token).getPayload().getExpiration();
  }
}
