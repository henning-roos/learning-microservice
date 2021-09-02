# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: interfaces/datetime.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='interfaces/datetime.proto',
  package='datetime',
  syntax='proto3',
  serialized_options=b'Z\013/interfaces',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\x19interfaces/datetime.proto\x12\x08\x64\x61tetime\"\x19\n\tTimeReply\x12\x0c\n\x04time\x18\x01 \x01(\t\"\x19\n\tDateReply\x12\x0c\n\x04\x64\x61te\x18\x01 \x01(\t\"\r\n\x0bTimeRequest\"\r\n\x0b\x44\x61teRequest2<\n\x04Time\x12\x34\n\x04Time\x12\x15.datetime.TimeRequest\x1a\x13.datetime.TimeReply\"\x00\x32<\n\x04\x44\x61te\x12\x34\n\x04\x44\x61te\x12\x15.datetime.DateRequest\x1a\x13.datetime.DateReply\"\x00\x42\rZ\x0b/interfacesb\x06proto3'
)




_TIMEREPLY = _descriptor.Descriptor(
  name='TimeReply',
  full_name='datetime.TimeReply',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='time', full_name='datetime.TimeReply.time', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=39,
  serialized_end=64,
)


_DATEREPLY = _descriptor.Descriptor(
  name='DateReply',
  full_name='datetime.DateReply',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='date', full_name='datetime.DateReply.date', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=66,
  serialized_end=91,
)


_TIMEREQUEST = _descriptor.Descriptor(
  name='TimeRequest',
  full_name='datetime.TimeRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=93,
  serialized_end=106,
)


_DATEREQUEST = _descriptor.Descriptor(
  name='DateRequest',
  full_name='datetime.DateRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=108,
  serialized_end=121,
)

DESCRIPTOR.message_types_by_name['TimeReply'] = _TIMEREPLY
DESCRIPTOR.message_types_by_name['DateReply'] = _DATEREPLY
DESCRIPTOR.message_types_by_name['TimeRequest'] = _TIMEREQUEST
DESCRIPTOR.message_types_by_name['DateRequest'] = _DATEREQUEST
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

TimeReply = _reflection.GeneratedProtocolMessageType('TimeReply', (_message.Message,), {
  'DESCRIPTOR' : _TIMEREPLY,
  '__module__' : 'interfaces.datetime_pb2'
  # @@protoc_insertion_point(class_scope:datetime.TimeReply)
  })
_sym_db.RegisterMessage(TimeReply)

DateReply = _reflection.GeneratedProtocolMessageType('DateReply', (_message.Message,), {
  'DESCRIPTOR' : _DATEREPLY,
  '__module__' : 'interfaces.datetime_pb2'
  # @@protoc_insertion_point(class_scope:datetime.DateReply)
  })
_sym_db.RegisterMessage(DateReply)

TimeRequest = _reflection.GeneratedProtocolMessageType('TimeRequest', (_message.Message,), {
  'DESCRIPTOR' : _TIMEREQUEST,
  '__module__' : 'interfaces.datetime_pb2'
  # @@protoc_insertion_point(class_scope:datetime.TimeRequest)
  })
_sym_db.RegisterMessage(TimeRequest)

DateRequest = _reflection.GeneratedProtocolMessageType('DateRequest', (_message.Message,), {
  'DESCRIPTOR' : _DATEREQUEST,
  '__module__' : 'interfaces.datetime_pb2'
  # @@protoc_insertion_point(class_scope:datetime.DateRequest)
  })
_sym_db.RegisterMessage(DateRequest)


DESCRIPTOR._options = None

_TIME = _descriptor.ServiceDescriptor(
  name='Time',
  full_name='datetime.Time',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=123,
  serialized_end=183,
  methods=[
  _descriptor.MethodDescriptor(
    name='Time',
    full_name='datetime.Time.Time',
    index=0,
    containing_service=None,
    input_type=_TIMEREQUEST,
    output_type=_TIMEREPLY,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_TIME)

DESCRIPTOR.services_by_name['Time'] = _TIME


_DATE = _descriptor.ServiceDescriptor(
  name='Date',
  full_name='datetime.Date',
  file=DESCRIPTOR,
  index=1,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=185,
  serialized_end=245,
  methods=[
  _descriptor.MethodDescriptor(
    name='Date',
    full_name='datetime.Date.Date',
    index=0,
    containing_service=None,
    input_type=_DATEREQUEST,
    output_type=_DATEREPLY,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_DATE)

DESCRIPTOR.services_by_name['Date'] = _DATE

# @@protoc_insertion_point(module_scope)
