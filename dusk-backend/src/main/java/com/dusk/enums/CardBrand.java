package com.dusk.enums;

import com.dusk.converter.PersistableEnums;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum CardBrand implements PersistableEnums<String> {
    VISA("visa"),
    MASTERCARD("mastercard"),
    AMERICAN_EXPRESS("amex"),
    DISCOVER("discover"),
    UNION_PAY("unionpay"),
    JCB("jcb"),
    RUPAY("rupay");

    @JsonValue
    private final String value;
}

