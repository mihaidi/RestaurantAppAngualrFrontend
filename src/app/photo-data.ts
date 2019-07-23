export class PhotoData {

    id: number;
    relUrl: String;
    uploadDate: Date;
    userId: number
    fileTypes: String;



    constructor(id: number, relUrl: String, uploadDate: Date, userId: number, fileType: String) {
        this.id = id;
        this.relUrl = relUrl;
        this.uploadDate = uploadDate;
        this.userId = userId;
        this.fileTypes = fileType;
    }
}
