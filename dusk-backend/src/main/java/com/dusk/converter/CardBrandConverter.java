package com.dusk.converter;

import com.dusk.enums.CardBrand;
import jakarta.persistence.Converter;

@Converter(autoApply = true)
public class CardBrandConverter extends AbstractEnumConverter<CardBrand, String> {
    public CardBrandConverter() {
        super(CardBrand.class);
    }
}

