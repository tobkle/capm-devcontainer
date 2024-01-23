import { Inject, SRV, Service, UnboundActions } from '@dxfrontier/cds-ts-dispatcher';

@UnboundActions()
export class UnboundActionsHandler {
  @Inject(SRV) private readonly srv: Service;

  // @OnError, @OnEvent, @OnAction, @OnFunction
}
