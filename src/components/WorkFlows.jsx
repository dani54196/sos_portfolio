import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Box,
  Container,
} from "@chakra-ui/react";

const steps = [
  {
    title: "First",
    description:
      "lorem15 Lorem ipsum dolor sit amet consectetur adipisicing elorem15 Lorem ipsum dolor sit amet consectetur adipisicing el lorem15 Lorem ipsum dolor sit amet consectetur adipisicing elorem15 Lorem ipsum dolor sit amet consectetur adipisicing el",
  },
  { title: "Second", description: "Planeamiento, arquitectura y Desarrollo" },
  { title: "Third", description: "Despliegue y Mantenimiento" },
];

const WorkFlows = () => {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <>
      <h2 className="text-center" >WorkFlows</h2>
      <Container maxW="95%">
        <Stepper
          className="p-2"
          index={activeStep}
          orientation="vertical"
          height="300px"
          gap="0"
          w="full"
        >
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box flexShrink="0" w="full">
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      </Container>
    </>
  );
};

export default WorkFlows;
