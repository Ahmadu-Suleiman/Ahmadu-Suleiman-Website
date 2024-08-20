import 'package:ahmad_suleiman/others/student.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class CscDetailsUpload extends StatelessWidget {
  CscDetailsUpload({super.key});

  final TextEditingController firstnameController = TextEditingController();
  final TextEditingController lastnameController = TextEditingController();
  final TextEditingController nicknameController = TextEditingController();
  final TextEditingController dobController = TextEditingController();
  final TextEditingController originController = TextEditingController();
  final TextEditingController hobbiesController = TextEditingController();
  final TextEditingController relationshipController = TextEditingController();
  final TextEditingController crushController = TextEditingController();
  final TextEditingController igController = TextEditingController();
  final TextEditingController stressLevelController = TextEditingController();
  final TextEditingController courseController = TextEditingController();
  final TextEditingController lecturerController = TextEditingController();
  final TextEditingController whatElseController = TextEditingController();
  final TextEditingController quoteController = TextEditingController();

  final formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
            leading: Image.asset('assets/images/others/kasulogo.png'),
            title: Text('Computer Science Students Personality Flyer Creator',
                style: Theme.of(context).textTheme.headlineLarge?.copyWith(
                    color: Theme.of(context).colorScheme.primary,
                    fontWeight: FontWeight.bold))),
        body: SingleChildScrollView(
            child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: Column(children: [
                  Form(
                      key: formKey,
                      child: Column(children: <Widget>[
                        input('First name', firstnameController),
                        input('Last name', lastnameController),
                        input('Nickname', nicknameController),
                        input('Date Of Birth', dobController),
                        input('Hobbies', hobbiesController),
                        input('Relationship status', relationshipController),
                        input('Class crush', crushController),
                        input('IG handle', igController),
                        input('Most stressful level', stressLevelController),
                        input('Favourite course', courseController),
                        input('Favourite lecturer', lecturerController),
                        input('If not CSC, What else?', whatElseController),
                        input('Favourite quote', quoteController)
                      ])),
                  const SizedBox(height: 20),
                  ElevatedButton(
                      onPressed: () {
                        if (formKey.currentState!.validate()) {
                          Student student = Student(
                              firstname: firstnameController.text,
                              lastname: lastnameController.text,
                              nickname: nicknameController.text,
                              dob: dobController.text,
                              origin: originController.text,
                              hobbies: hobbiesController.text,
                              relationship: relationshipController.text,
                              crush: crushController.text,
                              ig: igController.text,
                              stressfulLevel: stressLevelController.text,
                              course: courseController.text,
                              lecturer: lecturerController.text,
                              whatElse: whatElseController.text,
                              quote: quoteController.text);

                          context.go("/csc-personality-page", extra: student);
                        }
                      },
                      child: const Text('Submit'))
                ]))));
  }

  Widget input(String label, final TextEditingController controller) =>
      TextFormField(
          controller: controller,
          decoration: InputDecoration(labelText: label),
          validator: (value) {
            if (value == null || value.isEmpty) return 'Write something';
            return null;
          });
}
