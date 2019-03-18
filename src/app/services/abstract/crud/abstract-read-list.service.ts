import { AbstractReadService } from './abstract-read.service';

export abstract class AbstractReadListService<DTO, DATA> extends AbstractReadService<DTO[], DATA[]> {
    protected mapDtoToData(dtoEntities: DTO[]): DATA[] {
        return dtoEntities.map((dtoEntity) => this.mapEntityDtoToData(dtoEntity));
    }

    protected readUrl(): string {
        return this.baseUrl;
    }

    protected abstract mapEntityDtoToData(dto: DTO): DATA;

}
