import {
    EnvironmentVars,
    IConfigService,
} from '@core/common/config/config-service.interface';
import { defaultConfig } from '@core/common/config/config.const';

export class ConfigService implements IConfigService<EnvironmentVars> {
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
