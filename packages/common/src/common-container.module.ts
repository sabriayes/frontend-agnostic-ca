import { ContainerModule, interfaces } from 'inversify';
import {
    CONFIG_SERVICE_TOKEN,
    ConfigService,
    ICommonConfigService,
} from '@core/common/config';
import {
    STORE_SERVICE_TOKEN,
    TOKENS_SERVICE_TOKEN,
} from '@core/common/shared/const';
import { StoreService, TokensService } from '@core/common/shared/services';
import { ITokensService, ICommonStoreService } from '@core/common/shared/ports';

export const commonContainerModule = new ContainerModule((bind: interfaces.Bind) => {
    bind<ICommonConfigService>(CONFIG_SERVICE_TOKEN)
        .to(ConfigService)
        .inSingletonScope();

    bind<ICommonStoreService>(STORE_SERVICE_TOKEN)
        .to(StoreService)
        .inSingletonScope();

    bind<ITokensService>(TOKENS_SERVICE_TOKEN)
        .to(TokensService)
        .inSingletonScope();
});
