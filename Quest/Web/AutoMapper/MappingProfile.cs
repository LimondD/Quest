using AutoMapper;
using DAL.Entities.Quest;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.DTO.Quest;

namespace Web.AutoMapper
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            // Add as many of these lines as you need to map your objects
            CreateMap<QuestEntity, QuestDto>()
                .ForMember(dest => dest.ImageName, opt => opt.MapFrom(src => src.Images.FirstOrDefault(x => x.IsMain).Name));
        }
    }
}