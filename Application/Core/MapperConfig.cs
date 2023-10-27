using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MapperConfig : Profile
    {
          public MapperConfig()
        {   
            CreateMap<Activity, 
                ActivityDTO>().ReverseMap(); 
        }
    }
}