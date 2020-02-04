import Sequelize from "sequelize";

import {
    Column,
    Table,
    PrimaryKey,
    DataType,
    AutoIncrement,
    Unique,
    IsUrl,
    AllowNull
} from "sequelize-typescript";

@Table({ tableName: "URL", timestamps: false })
class URL extends Sequelize.Model<URL> {
    @AllowNull(false)
    @AutoIncrement
    @PrimaryKey
    @Column({
        type: DataType.BIGINT,
        comment: "Shortcut URL Serial number"
    })
    id!: number;

    @AllowNull(false)
    @IsUrl
    @Column({
        type: DataType.TEXT,
        comment: "Original URL"
    })
    url!: string;
}

export default URL;
