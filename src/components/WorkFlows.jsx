import { useTranslation } from "react-i18next";
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



const WorkFlows = () => {
  const { t } = useTranslation();
  const { activeStep } = useSteps({
    index: 1,
    count: t("workFlow.step", { returnObjects: true }).length,
  });

  return (
    <>
      <h2 className="text-center">{t("workFlow.title")}</h2>
      <Container maxW="95%">
        <Stepper
          className="p-2"
          index={activeStep}
          orientation="vertical"
          height="300px"
          gap="0"
          w="full"
        >
          {t("workFlow.step", { returnObjects: true }).map((step, index) => (
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
