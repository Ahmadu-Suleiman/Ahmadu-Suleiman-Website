import 'package:flutter/material.dart';

void snackBar(BuildContext context, String message) =>
    ScaffoldMessenger.of(context)
      ..hideCurrentSnackBar()
      ..showSnackBar(SnackBar(
          content: Text(message),
          backgroundColor: Theme.of(context).colorScheme.secondary,
          padding: const EdgeInsets.all(20)));
