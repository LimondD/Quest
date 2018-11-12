using AutoMapper;
using DAL.Entities.Quest;
using System.Linq;
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

            CreateMap<QuestEntity, QuestDetailDto>()
               .ForMember(dest => dest.Images, opt => opt.MapFrom(src => src.Images.Select(x => x.Name)));
        }
    }
}