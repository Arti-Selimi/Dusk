package com.dusk.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.NullValuePropertyMappingStrategy;

import com.dusk.dtos.TransactionResponse;
import com.dusk.model.Transaction;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface TransactionMapper {

  @Mapping(source = "account.id", target = "accountId")
  @Mapping(source = "user.id", target = "userId")
  TransactionResponse toResponse(Transaction transaction);
}
