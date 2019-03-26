import React, { Component } from 'react';
import 'src/components/ImageUploader/style.scss';
import {mergeMap} from 'rxjs/operators';

export class ImageUploader extends Component {
  constructor (props) {
    super(props);

    this.state = {
      loading: false,
      image: props.user.profileImage
    };

    this.initiateUpload = this.initiateUpload.bind(this);
  }

  initiateUpload(e) {
    this.setState({
      loading: true
    });

    let _filePath;
    const file = e.target.files[0];
    const fileType = `${file.type}`;

    window.Oly.Services.Upload.getSignedUrl({
      entityType: this.props.uploadType, 
      id: this.props.uploadId, 
      fileType
    })
      .pipe(
        mergeMap(({uploadUrl}) => {
          _filePath = uploadUrl.filePath;
          return window.Oly.Services.Upload.putFile({url: uploadUrl.uploadUrl, file, fileType});
        }),
        mergeMap(() => {
          return window.Oly.Services.Upload.updateEntity({id: this.props.uploadId, filePath: _filePath, uploadType: this.props.uploadType});
        })
      )
      .subscribe(({updateUser}) => {
        console.log('updateUser ', updateUser);
        this.setState({
          loading: false,
          image: updateUser.profileImage
        });
      }, err => {
        this.setState({
          loading: false
        });
      });
  }

  render() { 
    const { options, src, user } = this.props; 

    return (
      <div className="olyauth__imageUploader">

        <span className="olyauth__imageUploader__img-wrapper">
          <img className="olyauth__imageUploader__img" src={this.state.image}/> 
        </span>
        <form className="olyauth__imageUploaderForm" encType="multipart/form-data">
          <div className="file-input-wrapper">
            <input name="imageUploader.file" type="file" multiple accept='image/*' onChange={this.initiateUpload} />
          </div>
        </form>
      </div>
    )
  }
}