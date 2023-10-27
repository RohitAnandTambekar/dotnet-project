using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Delete
    {
          public class Command: IRequest
          {

             public Guid Id {get;}

            public Command(Guid id)
            {
                Id = id;
            }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _dataContext;
            public Handler(DataContext dataContext)
            {
                _dataContext = dataContext;

            }


            public async Task Handle(Command request, CancellationToken cancellationToken){
                 var activity=await _dataContext.Activities.FindAsync(request.Id);
                _dataContext.Activities.Remove(activity);
                await _dataContext.SaveChangesAsync();
            }
    }
    }
}