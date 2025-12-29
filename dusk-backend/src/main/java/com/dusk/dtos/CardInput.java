package com.dusk.dtos;

import com.dusk.enums.CardBrand;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record CardInput(
    Long cardId,
    @NotBlank(message = "please give a valid user id") Long ownerId,
    @NotBlank(message = "please give a valid account id") Long accountId,
    @NotNull(message = "please fill out a valid address") String ownerAddress,
    @NotNull(message = "please fill out a valid billing address") String billingAddress,
    @NotNull(message = "please select a valid card brand") CardBrand brand) {
}
