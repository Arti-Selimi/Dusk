package com.dusk.mapper;

import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

import com.dusk.dtos.CardInput;
import com.dusk.dtos.CardResponse;
import com.dusk.model.Card;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface CardMapper {
  @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
  void updateCardFromInput(CardInput input, @MappingTarget Card card);

  CardResponse toResponse(Card card);
}
