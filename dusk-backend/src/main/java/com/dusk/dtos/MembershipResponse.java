package com.dusk.dtos;

public record MembershipResponse(
    Long id,
    Long userId,
    String name,
    String membershipType,
    int maxAccounts,
    int maxCards,
    boolean isPaid,
    boolean isActive,
    String startDate,
    String expiryDate) {
}
