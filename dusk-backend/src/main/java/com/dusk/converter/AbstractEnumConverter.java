package com.dusk.converter;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import java.util.Arrays;

public abstract class AbstractEnumConverter<E extends Enum<E> & PersistableEnums<T>, T> implements AttributeConverter<E, T> {
    private final Class<E> clazz;

    protected AbstractEnumConverter(Class<E> clazz) {
        this.clazz = clazz;
    }

    @Override
    public T convertToDatabaseColumn(E attribute) {
        return attribute == null ? null : attribute.getValue();
    }

    @Override
    public E convertToEntityAttribute(T dbData) {
        if (dbData == null) return null;
        return Arrays.stream(clazz.getEnumConstants())
            .filter(e -> e.getValue().equals(dbData))
            .findFirst()
            .orElseThrow(() -> new IllegalArgumentException("Unknown enum value in db: " + dbData));
    }
}
