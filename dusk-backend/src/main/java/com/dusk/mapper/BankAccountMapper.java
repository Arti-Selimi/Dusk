package com.dusk.mapper;

import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

import com.dusk.dtos.BankAccountInput;
import com.dusk.dtos.BankAccountResponse;
import com.dusk.model.BankAccount;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface BankAccountMapper {

  @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
  void updateBankAccountFromInput(BankAccountInput accountDetails, @MappingTarget BankAccount account);

  BankAccountResponse toResponse(BankAccount account);
}
