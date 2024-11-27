import { injectable } from 'inversify';
import { defaultConfig } from '@core/common/config/config.const';
import {
    EnvironmentVars,
    ICommonConfigService,
} from '@core/common/config/config-service.interface';

@injectable()
export class ConfigService implements ICommonConfigService {
    private environments = defaultConfig();

    get<G extends keyof EnvironmentVars>(key: G): EnvironmentVars[G] {
        return this.environments[key];
    }

    getVariables(): EnvironmentVars {
        return this.environments;
    }

    set<S extends keyof EnvironmentVars>(key: S, value: EnvironmentVars[S]): void {
        this.environments[key] = value;
    }

    setVariables(envs: EnvironmentVars): void {
        this.environments = envs;
    }
}
