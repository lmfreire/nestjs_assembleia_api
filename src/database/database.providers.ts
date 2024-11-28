import { Provider } from '@nestjs/common'
import {DataSource} from 'typeorm'

export const databaseProviders: Provider[] = [
    {
        provide: 'DATA_SOURCE',
        useFactory: () => {
            const dataSource = new DataSource({
                type: 'mysql',
                host: 'nestjs_assembleia_api-db-1',
                port: 3306,
                username: 'root',
                password: 'root',
                database: 'assembleia',
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                synchronize: true,
            })

            return dataSource.initialize()
        }
    }
]