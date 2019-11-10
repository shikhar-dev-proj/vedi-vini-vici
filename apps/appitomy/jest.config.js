module.exports = {
  name: 'appitomy',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/appitomy',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
