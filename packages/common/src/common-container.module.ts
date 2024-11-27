import { ContainerModule, interfaces } from 'inversify';
import {
    CONFIG_SERVICE_TOKEN,
    ConfigService,
    ICommonConfigService,
} from '@core/common/config';

export const commonContainerModule = new ContainerModule((bind: interfaces.Bind) => {
    bind<ICommonConfigService>(CONFIG_SERVICE_TOKEN)
        .to(ConfigService)
        .inSingletonScope();
});
