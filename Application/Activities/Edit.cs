using AutoMapper;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore.Diagnostics;
using Persistence;

namespace Application.Activities
{
    public class Edit
    {
        public class Command : IRequest{
           

            public ActivityDTO _activityDto { get; set; }
            public Guid Id { get; set; }
            public Command(ActivityDTO activityDto, Guid id){
                _activityDto=activityDto;
                Id=id;
            }
        }

        public class Handler : IRequestHandler<Command>{
             private readonly DataContext _context;
              private readonly IMapper _mapper; 

            public Handler(DataContext context, IMapper mapper){
                _context=context;
                _mapper=mapper;
            }

             public async Task Handle(Command request, CancellationToken cancellationToken){


                  var activity=await _context.Activities.FindAsync(request.Id);
                  if(activity==null){
                    throw new Exception($"CategoryID {request.Id} is not found.");
                  }

                  var result=_mapper.Map(request._activityDto,activity);
                  _context.Activities.Update(activity);
                  await _context.SaveChangesAsync();
            }

        }
    }
}