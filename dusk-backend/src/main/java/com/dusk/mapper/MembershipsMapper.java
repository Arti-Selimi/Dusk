package com.dusk.mapper;

import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

import com.dusk.dtos.MembershipInput;
import com.dusk.dtos.MembershipResponse;
import com.dusk.model.Memberships;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface MembershipsMapper {

  @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
  void updateMembershipFromInput(MembershipInput membershipDetails, @MappingTarget Memberships membership);

  @Mapping(source = "user.id", target = "userId")
  @Mapping(source = "active", target = "isActive")
  MembershipResponse toResponse(Memberships membership);
}
