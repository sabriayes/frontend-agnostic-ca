import { ContainerModule, interfaces } from 'inversify';
import Symbols from './symbols.const';
import { ConfigService, ICommonConfigService } from '@core/common/config';
import { StoreService, TokensService } from '@core/common/services';
import { ITokensService, ICommonStoreService } from '@core/common/ports';

export const commonContainerModule = new ContainerModule((bind: interfaces.Bind) => {
    bind<ICommonConfigService>(Symbols.ConfigService)
        .to(ConfigService)
        .inSingletonScope();

    bind<ICommonStoreService>(Symbols.StoreService)
        .to(StoreService)
        .inSingletonScope();

    bind<ITokensService>(Symbols.TokensService)
        .to(TokensService)
        .inSingletonScope();
});
